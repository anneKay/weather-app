class User < ApplicationRecord
  before_save { self.email = email.downcase }

  validates :name, presence: true, length: { minimum: 2, maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true,
                    uniqueness: { case_sensitive: false },
                    length: { maximum: 50 },
                    format: { with: VALID_EMAIL_REGEX}
  validates :password_digest, presence: true
  has_many :stories

  has_secure_password

end
