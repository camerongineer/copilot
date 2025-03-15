function skillsMember() {
    return {
        name: 'skills',
        title: 'Skills',
        description: 'Skills',
        type: 'object',
        fields: [
            {
                name: 'skills',
                title: 'Skills',
                description: 'List of skills',
                type: 'array',
                of: [{type: 'string'}],
            },
        ],
    }
} // skillsMember