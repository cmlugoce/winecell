class Wine < ApplicationRecord
    validates_presence_of :name

    def like
        self.likes += 1
    end 
end
