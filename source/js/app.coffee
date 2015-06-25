class Categories
  constructor: ->

  getCategories: ->
    categories = ["software", "development", "ux", "design", "mobile"]
    return categories





class Apprenticeships
  constructor: (apprenticeships) ->
    @apprenticeships = apprenticeships

  buildApprenticeships: ->
    apprenticeshipsList = []
    for apprenticeship, category of @apprenticeships
      apprenticeship = new Apprenticeship(category, apprenticeship)
      apprenticeshipsList.push(apprenticeship)

    @apprenticeshipsList = apprenticeshipsList



class Apprenticeship
  constructor: (category, name, hidden=false) ->
    @category = category
    @name = name
    @hidden = hidden

  hide: ->
    @hidden = true