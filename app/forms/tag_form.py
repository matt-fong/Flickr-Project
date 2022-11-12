from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange

class TagForm(FlaskForm):
  userId = IntegerField('userId', validators=[DataRequired(), NumberRange(min=1, max=1000)])
  imageId = IntegerField('imageId', validators=[DataRequired(), NumberRange(min=1, max=1000)])
  name = StringField('name', validators=[DataRequired(), Length(min=1, max=100)])
  submit = SubmitField('Submit')
