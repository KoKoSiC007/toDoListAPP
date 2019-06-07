class Todo < ApplicationRecord
  belongs_to :project
  validate :text, presence: true, length:{minimum: 3}
end
