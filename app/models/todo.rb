class Todo < ApplicationRecord
  belongs_to :project
  validates :text, presence: true, length:{minimum: 3}
end
