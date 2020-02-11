class LessonPayment < ApplicationRecord
    belongs_to :account, optional: true
    accepts_nested_attributes_for :account
  
    belongs_to :booking, optional: true
    accepts_nested_attributes_for :booking
end
