class Cocktail < ApplicationRecord
  has_many :doses, dependent: :destroy
  has_many :ingredients, through: :doses
  has_many_attached :photos

  validates :name, presence: true, uniqueness: true
  # validates :image_url, presence: true
end
