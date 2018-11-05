class HomeController < ApplicationController
  def index
    @name = [
      {name: 'Luke'},
      {name: 'Tish'},
    ]
  end
end
