class User < ApplicationRecord
    belongs_to :account, optional: true
    accepts_nested_attributes_for :account

    has_many :trainers, dependent: :destroy, :inverse_of => :user
    accepts_nested_attributes_for :trainers

    has_many :clients, dependent: :destroy, :inverse_of => :user
    accepts_nested_attributes_for :clients

    has_secure_password

    validates_presence_of :email
    validates_uniqueness_of :email, case_sensitive: false
    validates_format_of :email, with: /@/
end
