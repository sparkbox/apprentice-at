class Categories
  constructor: ->

  getCategories: ->
    categories = ["software", "development", "ux", "design", "mobile"]
    return categories

class Apprenticeships
  constructor: (apprenticeships) ->
    @apprenticeships = apprenticeships

  buildApprenticeships: ->
    for apprenticeship, category of @apprenticeships
      apprenticeshipObject = new Apprenticeship(apprenticeship, category)

class Apprenticeship
  constructor: (name, category, hidden=false) ->
    @name = name
    @category = category
    @hidden = hidden

  hideApprenticeship: ->
    @hidden = true