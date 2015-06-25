describe 'Categories', () ->
  categories = {}
  beforeEach ->
    categories = new Categories()

  it 'should return a list of categories', () ->
    expect(categories.getCategories().length).toBe 5


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

describe 'Apprenticeship', () ->
  apprenticeship = {}
  beforeEach ->
    apprenticeship = new Apprenticeship('sparkbox', 'development')

  it 'should hide if you tell it to hide', () ->
    apprenticeship.hideApprenticeship()
    expect(apprenticeship.hidden).toBe true