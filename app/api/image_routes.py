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
    return image.to_dict(), 200
