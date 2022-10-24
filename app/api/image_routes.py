from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Image, db
from ..forms.image_form import ImageForm

image_routes = Blueprint('images', __name__)


@image_routes.route('/')
def get_images():
  images = Image.query.all()
  return {'images': [image.to_dict() for image in images]}

@image_routes.route('/create_image', methods=['POST'])
@login_required
def create_image():
  form = ImageForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():

    image = Image(
      title=form.data['title'],
      description=form.data['description'],
      imageUrl=form.data['imageUrl'],
      userId=form.data['userId']
    )

    db.session.add(image)
    db.session.commit()
    return jsonify(image.to_dict()), 200

@image_routes.route('/<int:image_id>', methods=['PUT'])
@login_required
def edit_image(image_id):
  form = ImageForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    imageData = Image.query.get(image_id)
    imageData.title = form.data['title']
    imageData.description = form.data['description']
    imageData.imageUrl = form.data['imageUrl']
    imageData.userId = form.data['userId']

    db.session.commit()
    return jsonify(imageData.to_dict()), 200

@image_routes.route('/<int:image_id>', methods=['DELETE'])
@login_required
def delete_image(image_id):
  image = Image.query.get(image_id)
  db.session.delete(image)
  db.session.commit()
  return {'message': 'Review deleted'}
