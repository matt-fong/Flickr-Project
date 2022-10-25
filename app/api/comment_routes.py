from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Comment, db
from ..forms.comment_form import CommentForm

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/')
def get_comments():
  comments = Comment.query.all()
  return {'comments': [comment.to_dict() for comment in comments]}

@comment_routes.route('/<int:id>')
def get_comments_id(id):
  comments = Comment.query.filter(Comment.imageId == id).all()
  print('THIS IS IMAGE COMMENTS', comments)
  if comments == None:
    return {'message': 'No comments found'}
  return {'comments': [comment.to_dict() for comment in comments]}

@comment_routes.route('/create_comment', methods=['POST'])
@login_required
def create_comment():
  form = CommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():

    comment = Comment(
      body=form.data['body'],
      userId=form.data['userId'],
      imageId=form.data['imageId']
    )

    db.session.add(comment)
    db.session.commit()
    return jsonify(comment.to_dict()), 200

@comment_routes.route('/<int:comment_id>', methods=['PUT'])
@login_required
def edit_comment(comment_id):
  form = CommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    commentData = Comment.query.get(comment_id)
    commentData.body = form.data['body']
    commentData.userId = form.data['userId']
    commentData.imageId = form.data['imageId']

    db.session.commit()
    return jsonify(commentData.to_dict()), 200

@comment_routes.route('/<int:comment_id>', methods=['DELETE'])
@login_required
def delete_comment(comment_id):
  comment = Comment.query.get(comment_id)
  db.session.delete(comment)
  db.session.commit()
  return {'message': 'Review deleted'}
