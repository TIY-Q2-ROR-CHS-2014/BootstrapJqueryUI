class Bear < ActiveRecord::Base
  has_many :honeys

  accepts_nested_attributes_for :honeys, allow_destroy: true
end
