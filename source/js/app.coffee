class Categories
  constructor: ->

  getCategories: ->
    categories = ["software", "development", "ux", "design", "mobile"]

class Apprenticeships
  constructor: (@apprenticeships) ->

  buildApprenticeships: ->
    for apprenticeship, category of @apprenticeships
      apprenticeshipObject = new Apprenticeship(apprenticeship, category)

class Apprenticeship
  constructor: (@name, @category, @hidden=false) ->

  hideApprenticeship: ->
    @hidden = true