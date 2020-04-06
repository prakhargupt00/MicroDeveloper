getTemplates = async (req, res, next) => {
    var templates = {
        'one-to-one': {
            'type A':'(a, b) { return 0 }',
            'type B':'(a, b) { return 0 }',
            'type C':'(a, b) { return 0 }',
            'type D':'(a, b) { return 0 }',
            'custom':'(a, b) { return 0 }'
        },

        'one-to-many': {
            'type X':'(a, b) { return 0 }',
            'type B':'(a, b) { return 0 }',
            'type C':'(a, b) { return 0 }',
            'type D':'(a, b) { return 0 }',
            'custom':'(a, b) { return 0 }'
        },

        'batching': {
            'type Y':'(a, b) { return 0 }',
            'type B':'(a, b) { return 0 }',
            'type C':'(a, b) { return 0 }',
            'type D':'(a, b) { return 0 }',
            'custom':'(a, b) { return 0 }'
        },

        'splitting': {
            'type G':'(a, b) { return 0 }',
            'type Z':'(a, b) { return 0 }',
            'type B':'(a, b) { return 0 }',
            'type C':'(a, b) { return 0 }',
            'type D':'(a, b) { return 0 }',
            'custom':'(a, b) { return 0 }'
        },

    }
    res.json({templates})
}

module.exports = getTemplates
