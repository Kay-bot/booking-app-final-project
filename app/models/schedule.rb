class Schedule < ApplicationRecord

    # Tenant Of
  belongs_to :account, optional: true
  accepts_nested_attributes_for :account

  belongs_to :lesson, optional: true
  accepts_nested_attributes_for :lesson
  
  belongs_to :trainer, optional: true
  accepts_nested_attributes_for :trainer
  
  has_many :bookings, :inverse_of => :schedule
  accepts_nested_attributes_for :bookings
  
  validates :date, uniqueness: { scope: :trainer_id, message: "You have already made this time available" }
  
end 
