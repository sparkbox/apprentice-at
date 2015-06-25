class Categories
  constructor: ->

  getCategories: ->
    categories = []

    $('.apprenticeship').each ->
      categories.push $(this).data('category')

    uniqueCategories = $.unique categories

    return uniqueCategories
    console.log uniqueCategories

class Apprenticeship
    constructor: (category, hidden=false) ->
      @category = category
      @hidden = hidden

    hide: ->
      @hidden = true