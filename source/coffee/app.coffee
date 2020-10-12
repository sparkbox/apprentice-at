#  The Apprenticeship class creates a new instance of an apprenticeship
class Apprenticeship
  constructor: (el) ->
    @$el = $(el)
    @category = @$el.data('category')
    @name = @$el.find('.apprenticeship__header').text() + ' ' + @category
    @hidden = false

  # Hides individual apprenticeships
  hide: ->
    @$el.hide()
    @hidden = true

  # Shows individual apprenticeships
  show: ->
    @$el.show()
    @hidden = false

  # Adds a class signifying that this is the last visible apprenticeship
  addLastClass: ->
    @$el.addClass('last')

  # Removes the class applied by the above method
  removeLastClass: ->
    @$el.removeClass('last')


# The Apprenticeships class takes in a list of individual apprenticeships
class Apprenticeships
  constructor: (@list) ->

  # Hides apprenticeships except for those in the selected category
  filter: (selectedCategory) ->
    for apprenticeship in @list
      if selectedCategory is 'all' or apprenticeship.category is selectedCategory
        apprenticeship.show()
      else
        apprenticeship.hide()
    @cleanUp()
    @list

  # Toggles .last on the last visible apprenticeship for styles
  cleanUp: ->
    visibleList = []
    for apprenticeship in @list
      apprenticeship.removeLastClass()

      if apprenticeship.hidden is false
        visibleList.push apprenticeship

    visibleList[visibleList.length - 1].addLastClass()

# jQuery time on DOM ready
$(document).ready ->
  list = []
  # Iterates through each apprenticeship in the DOM and instantiates it into a list
  $('.js-apprenticeship').each ->
    list.push new Apprenticeship(@)

  # Instantiates the group of apprenticeships from the list of apprenticeships
  apprenticeships = new Apprenticeships(list)

  # Adds a click handler to the filter buttons
  $('.category__item').on 'click', (e) ->
    if e.preventDefault
      e.preventDefault()
    else
      event.returnValue = false

    # Adds and removes active state on filter buttons
    $('.category__item.is-active').removeClass('is-active')
    $(@).addClass('is-active')

    # Filters visible apprenticeships based on the data attribute of clicked button
    apprenticeships.filter($(@).data('filters'))

  validation()
