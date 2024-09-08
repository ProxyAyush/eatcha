class Octokit {
    constructor(options) {
        this.options = options;
    }

    issuesCreate(options) {
        // Use your logic to create an issue
        console.log('Creating issue: ', options);
    }

    static getInstance() {
        return new Octokit({
            baseUrl: 'https://api.github.com',
            accessToken: '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'
        });
    }
}
