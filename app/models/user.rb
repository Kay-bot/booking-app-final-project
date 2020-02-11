require 'bcrypt'
class User < ApplicationRecord
    
    has_secure_password 

    validates :email, presence: true, uniqueness: true
    validates :password, presence: true
   
    belongs_to :account, optional: true
    accepts_nested_attributes_for :account

    has_many :trainers, dependent: :destroy, :inverse_of => :user
    accepts_nested_attributes_for :trainers

    has_many :clients, dependent: :destroy, :inverse_of => :user
    accepts_nested_attributes_for :clients
end
