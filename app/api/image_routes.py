from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Image, db
from ..forms.image_form import ImageForm
from app.aws import (
  upload_file_to_s3, allowed_file, get_unique_filename)

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

@image_routes.route("", methods=["POST"])
@login_required
def upload_image():
  if "image" not in request.files:
    return {"errors": "image required"}, 400

  image = request.files["image"]

  if not allowed_file(image.filename):
    return {"errors": "file type not permitted"}, 400

  image.filename = get_unique_filename(image.filename)

  upload = upload_file_to_s3(image)

  if "url" not in upload:
    # if the dictionary doesn't have a url key
    # it means that there was an error when we tried to upload
    # so we send back that error message
    return upload, 400

  url = upload["url"]
  # flask_login allows us to get the current user from the request

  # new_image = Image(user=current_user, url=url)
  # db.session.add(new_image)
  # db.session.commit()
  return {"url": url}
