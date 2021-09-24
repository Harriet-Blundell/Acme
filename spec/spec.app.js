const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');

describe('GET about page', () => {
    it('returns a 200 HTTP status code when endpoint matches about page', () => {
        return request(app).get("/about-page").then(res => {
            expect(res.status).to.eql(200);
        })
    })

    it('should display the title of the template file', () => {
        return request(app).get("/about-page").then(res => {
            expect(res.text).to.include("<title>Welcome to Acme</title>")
        })
    })

    it('should display the correct header tag and content in the about page markdown file', () => {
        return request(app).get("/about-page").then(res => {
            expect(res.text).to.include(`<h1 id="about">ABOUT</h1>\n<h1 id="page">PAGE.</h1>`)
        })
    })

    it('should display the correct body tags and content in the about page markdown file', () => {
        return request(app).get('/about-page').then(res => {
            expect(res.text).to.include("<p><strong>Acme Co. is a reputable maker of widgets and is an international brand.</strong></p>")
            expect(res.text).to.include("<p>Thank you for your interest in our services. Please contact us at enquiries@acme.com.</p>")
        })
    })
});

describe('GET blog page', () => {
    it('returns a 200 HTTP status code when endpoint match blog page', () => {
        return request(app).get("/blog/june/company-update").then(res => {
            expect(res.status).to.eql(200);
        })
    })

    it('should display the title of the template file', () => {
        return request(app).get("/blog/june/company-update").then(res => {
            expect(res.text).to.include("<title>Welcome to Acme</title>")
        })
    })

    it('should display the correct header tag and content in the blog page markdown file', () => {
        return request(app).get("/blog/june/company-update").then(res => {
            expect(res.text).to.include(`h1 id="junecompanyupdate">JUNE COMPANY UPDATE.</h1>`)
        })
    })

    it('should display the correct body tags and content in the blog markdown file', () => {
        return request(app).get('/blog/june/company-update').then(res => {
            expect(res.text).to.include("<p>Acme Co. continues to thrive across all its industry verticals and the outlook remains rosy for the rest of the financial year.</p>")
            expect(res.text).to.include("<p>We welcome feedback from our customer base - get in touch with Customer Services at contact@acme.com for more information.</p>")
        })
    })
})

describe('GET jobs page', () => {
    it('returns a 200 HTTP status code when endpoint match jobs page', () => {
        return request(app).get("/jobs").then(res => {
            expect(res.status).to.eql(200);
        })
    })

    it('should display the title of the template file', () => {
        return request(app).get("/jobs").then(res => {
            expect(res.text).to.include("<title>Welcome to Acme</title>")
        })
    })

    it('should display the correct header tag and content in the blog page markdown file', () => {
        return request(app).get("/jobs").then(res => {
            expect(res.text).to.include(`<h1 id="jobsat">JOBS at</h1>\n<h1 id="acmeco">Acme Co.</h1>`)
        })
    })

    it('should display the correct body tags and content in the jobs markdown file', () => {
        return request(app).get('/jobs').then(res => {
            expect(res.text).to.include("<p>Acme Co. is often seeking candidates in the areas of marketing, finance, customer support and sales. If you are an enthusiastic go-getter, you don't need to look any further for your next step up the corporate career ladder.</p>")
            expect(res.text).to.include("<p>Send us an email at careers@acme.com for more information.</p>")
        })
    })
})

describe('GET valves page', () => {
    it('returns a 200 HTTP status code when endpoint match valves page', () => {
        return request(app).get("/valves").then(res => {
            expect(res.status).to.eql(200);
        })
    })

    it('should display the title of the template file', () => {
        return request(app).get("/valves").then(res => {
            expect(res.text).to.include("<title>Welcome to Acme</title>")
        })
    })

    it('should display the correct header tag and content in the blog page markdown file', () => {
        return request(app).get("/valves").then(res => {
            expect(res.text).to.include(`<h1 id="valves">VALVES.</h1>`)
        })
    })

    it('should display the correct body tag and content in the valves markdown file', () => {
        return request(app).get('/valves').then(res => {
            expect(res.text).to.include("<p>Acme Co. valves are amongst the highest quality in the industry. Whether it's for industrial, commercial, medical or space exploration, you can always count on an Acme Co. valve.</p>")
        })
    })
})

describe('GET unknown URL', () => {
    it('should return a 404 HTTP status when URL does not match content folders', () => {
        return request(app).get("/unknown-folder/does-not-exist/this-should-not-work").then(res => {
            expect(res.status).to.eql(404);
        })
    })
})