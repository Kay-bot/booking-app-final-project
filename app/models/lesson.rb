class Lesson < ApplicationRecord
    
    belongs_to :trainer, optional: true
    accepts_nested_attributes_for :trainer

    has_many :schedules, :inverse_of => :trainer
    accepts_nested_attributes_for :schedules
  
    has_many :clients, :through => :bookings
    
    has_many :bookings, :inverse_of => :lessons
    accepts_nested_attributes_for :bookings

end
