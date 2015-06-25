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
      apprenticeshipObject = new Apprenticeship(category, apprenticeship)



class Apprenticeship
  constructor: (category, name, hidden=false) ->
    @category = category
    @name = name
    @hidden = hidden

  hide: ->
    @hidden = true