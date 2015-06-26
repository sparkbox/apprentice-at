class Apprenticeship
  constructor: (@name, @category, @hidden=false) ->

  hideApprenticeship: ->
    @hidden = true

  showApprenticeship: ->
    @hidden = false

class Apprenticeships
  constructor: (@apprenticeships) ->

  buildApprenticeships: ->
    new Apprenticeship(name, category) for name, category of @apprenticeships

  filterApprenticeships: (selectedCategory) ->
    apprenticeshipsArray = []
    for name, category of @apprenticeships
      apprenticeshipsArray.push(new Apprenticeship(name, category))

    for apprenticeship in apprenticeshipsArray
      if apprenticeship.category != selectedCategory
        apprenticeship.hideApprenticeship()
        console.log(apprenticeship.category + ' is hidden')
      else
        apprenticeship.showApprenticeship()
        console.log(apprenticeship.category + ' is visible')

    apprenticeshipsArray
    