class Apprenticeship
  constructor: (@name, @category, @hidden=false) ->
  hide: -> @hidden = true
  show: -> @hidden = false

describe 'Apprenticeship', ->
  apprenticeship = null

  beforeEach ->
    apprenticeship = new Apprenticeship('sparkbox', 'development')

  it 'should hide if you tell it to hide', ->
    apprenticeship.hide()
    expect(apprenticeship.hidden).toBe true

  it 'should show if you tell it to show', ->
    apprenticeship.show()
    expect(apprenticeship.hidden).toBe false

  it 'should create objects that know about their own category', ->
    expect(apprenticeship.category).toBe 'development'

  it 'should create objects that know about their own visibility', ->
    expect(apprenticeship.hidden).toBe false

  it 'should create objects that know about their own name', ->
    expect(apprenticeship.name).toBe 'sparkbox'

describe 'Apprenticeships', ->
  apprenticeships = null
  list = []

  beforeEach ->
    list.push new Apprenticeship('sparkbox', 'development', true)
    list.push new Apprenticeship('thoughtbot', 'development')
    list.push new Apprenticeship('upstatement', 'ux', true)
    list.push new Apprenticeship('merge', 'ux')
    
    apprenticeships = new Apprenticeships(list)

  it 'should create new apprenticeship objects for each apprenticeship', ->
    expect(apprenticeships.list.length).toBe 4

  describe 'filtering', ->
    it 'makes all apprenticeships visible if all is the selected category', ->

      apprenticeships.filter('all')
      for apprenticeship in list
        expect(apprenticeship.hidden).toBe false

    it 'makes a category visible if we filter that category', ->
      apprenticeships.filter('development')
      expect(list[0].hidden).toBe false
      expect(list[1].hidden).toBe false
      expect(list[2].hidden).toBe true
      expect(list[3].hidden).toBe true
