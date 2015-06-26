describe 'Apprenticeship', () ->
  apprenticeship = {}

  it 'should hide if you tell it to hide', () ->
    apprenticeship = new Apprenticeship('sparkbox', 'development')
    apprenticeship.hideApprenticeship()
    expect(apprenticeship.hidden).toBe true

  it 'should show if you tell it to show', () ->
    apprenticeship = new Apprenticeship('sparkbox', 'development', true)
    apprenticeship.showApprenticeship()
    expect(apprenticeship.hidden).toBe false

describe 'Apprenticeships', () ->
  apprenticeships = {}
  beforeEach ->
    apprenticeshipsList = sparkbox: 'development', thoughtbot: 'design', upstatement: 'ux', merge: 'software', apple: 'mobile'
    apprenticeships = new Apprenticeships(apprenticeshipsList)

  it 'should create new apprenticeship objects for each apprenticeship', () ->
    expect(apprenticeships.buildApprenticeships().length).toBe 5

  it 'should create objects that know about their own category', () ->
    expect(apprenticeships.buildApprenticeships()[0].category).toBe 'development'

  it 'should create objects that know about their own visibility', () ->
    expect(apprenticeships.buildApprenticeships()[1].hidden).toBe false

  it 'should create objects that know about their own name', () ->
    expect(apprenticeships.buildApprenticeships()[2].name).toBe 'upstatement'
