class HomeController < ApplicationController
  def index
    @name = [
      {name: 'Luke'},
      {name: 'Tish'},
      {name: 'Dan'},
      {name: 'Molly'},
    ]
  end
end
