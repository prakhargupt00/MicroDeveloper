getAll = async (req, res, next) => {
    var allMappings = {
      'types': ['one-to-one', 'one-to-many', 'batching', 'splitting', 'none'],
      'subTypes': {
        'one-to-one': ['type A', 'type B', 'type C', 'type D', 'custom'],
        'one-to-many': ['type E', 'type C', 'type D', 'type A', 'custom'],
        'batching': ['type F', 'type D', 'type A', 'type B', 'custom'],
        'splitting': ['type G', 'type A', 'type B', 'type C', 'custom'],
        'none': ['none']
      }
    }
    return res.json({allMappings})
}

module.exports = getAll
