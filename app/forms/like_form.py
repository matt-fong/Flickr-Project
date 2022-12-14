from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange

class LikeForm(FlaskForm):
  userId = IntegerField('userId', validators=[DataRequired(), NumberRange(min=1, max=1000)])
  imageId = IntegerField('imageId', validators=[DataRequired(), NumberRange(min=1, max=1000)])
  submit = SubmitField('Submit')
