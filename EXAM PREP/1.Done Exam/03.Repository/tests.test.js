let { Repository } = require('./solution');
const expect = require('chai').expect;

describe('Repository', () => {
  let properties = {
    name: 'string',
    age: 'number',
    birthday: 'object',
  };
  //Act
  let entity = {
    name: 'Pesho',
    age: 22,
    birthday: new Date(1998, 0, 7),
  };
  describe('Initialization', () => {
    let repository = new Repository(properties);
    it('Should add props property on init', function () {
      //Arange

      expect(repository).to.have.property('props');
      expect(repository.props).to.deep.equal(properties);
    });
    it('Should have property data on init', function () {
      //Arange

      expect(repository).to.have.property('data');
      expect(typeof repository.data).is.equal('object');
      expect(repository.data).instanceOf(Map);
    });
    it('Should have nextId of zero on init', () => {
      let repository = new Repository(properties);
      expect(repository).to.have.property('nextId');
      expect(typeof repository.nextId).to.equal('function');
    });
  });
  describe('Get count', () => {
    it('Should return number of added valid entries', () => {
      let repository = new Repository(properties);
      repository.add(entity);
      repository.add(entity);
      repository.add(entity);

      expect(repository.count).is.equal(3);
    });
    it('Should return 0 if no added entities', () => {
      let repository = new Repository(properties);
      expect(repository.count).is.equal(0);
    });
  });
  describe('Add entity', () => {
    it('Should return incremented id if valid entity is added', () => {
      let repository = new Repository(properties);
      expect(repository.add(entity)).to.equal(0);
      expect(repository.add(entity)).to.equal(1);
    });
    it('Should store valid entity in data map', () => {
      let repository = new Repository(properties);
      repository.add(entity);
      expect(repository.data.get(0)).not.to.be.undefined;
      //   expect(repository.data.get(0)).to.deep.equal(entity);
      expect(repository.data.get(0))
        .to.have.property('name')
        .that.equals('Pesho');
      expect(repository.data.get(0)).to.have.property('age').that.equals(22);
      expect(repository.data.get(0)).to.have.property('birthday');
    });
    it('Should throw error if property is missing', () => {
      let entity = {
        name: 'Pesho',
        age: 22,
      };
      let repository = new Repository(properties);

      expect(() => repository.add(entity)).to.throw(
        Error,
        `Property birthday is missing from the entity!`
      );
    });
    it('Should throw error if property has other type', () => {
      let entity = {
        name: 'Pesho',
        age: 22,
        birthday: '1998-01-06T22:00:00.000Z',
      };
      let repository = new Repository(properties);
      expect(() => repository.add(entity)).to.throw(
        Error,
        `Property birthday is not of correct type!`
      );
    });
  });
  describe('Get ID', () => {
    it('Should return entity by ID', () => {
      let repository = new Repository(properties);
      repository.add(entity);
      expect(repository.getId(0)).to.deep.equal(entity);
    });
    it('Should throw error when no id is found', () => {
      let repository = new Repository(properties);

      expect(() => repository.getId(1)).to.throw(
        Error,
        `Entity with id: 1 does not exist!`
      );
    });
  });
  describe('Update ', () => {
    it('Should update one valid entity with another', () => {
      let newEntity = {
        name: 'Doncho',
        age: 27,
        birthday: new Date(1995, 0, 7),
      };
      let repo = new Repository(properties);
      repo.add(entity);
      repo.update(0, newEntity);
      expect(repo.getId(0).name).to.equal('Doncho');
    });
    it('Should throw error when updating entity on invalid id', () => {
      let repo = new Repository(properties);

      expect(() => repo.update(2, entity)).to.throw(
        `Entity with id: 2 does not exist!`
      );
    });
  });
  describe('Delete', () => {
    it('Should delete one valid entity', () => {
      let repo = new Repository(properties);
      repo.add(entity);
      repo.add(entity);
      repo.del(0);
      expect(repo.count).to.equal(1);
    });
    it('Should should throw error on invalid ID', () => {
      let repo = new Repository(properties);
      expect(() => repo.del(2)).to.throw(`Entity with id: 2 does not exist!`);
    });
  });
});
