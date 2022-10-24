from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange

class CommentForm(FlaskForm):
  comment = StringField('comment', validators=[DataRequired(), Length(min=1, max=1000)])
  userId = IntegerField('userId', validators=[DataRequired(), NumberRange(min=1, max=1000)])
  imageId = IntegerField('imageId', validators=[DataRequired(), NumberRange(min=1, max=1000)])
  submit = SubmitField('Submit')
  
