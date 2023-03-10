'use strict';

const RequestBuilder = require('./requestBuilder');

// See https://auth0.com/docs/rules/current/context
class ContextBuilder {
    constructor() {
        this.context = {
            clientID: 'q2hn...pXmTUA',
            clientName: 'Default App',
            clientMetadata: {},
            connectionID: 'con_123',
            connection: 'Username-Password-Authentication',
            connectionStrategy: 'auth0',
            connectionOptions: {},
            connectionMetadata: {
                foo: 'bar'
            },
            samlConfiguration: {},
            protocol: 'oidc-basic-profile',
            stats: { loginsCount: 111 },
            sso: { with_auth0: false, with_dbconn: false, current_clients: [] },
            accessToken: {},
            idToken: {},
            sessionID: 'jYA5wG...BNT5Bak',
            request: {},
            authentication: {}
        };
        this.context.request = new RequestBuilder().build();
    }
    withClientId(id) {
        this.context.clientID = id;
        return this;
    }
    withEmail(email) {
        this.context.email = email;
        return this;
    }
    withRequest(request) {
        this.context.request = request;
        return this;
    }
    withIdToken(idToken) {
        this.context.idToken = idToken;
        return this;
    }
    withJwtConfiguration(jwtConfiguration) {
        this.context.jwtConfiguration = jwtConfiguration;
        return this;
    }
    withConnection(connection) {
        this.context.connection = connection;
        return this;
    }
    withConnectionOptions(connectionOptions) {
        this.context.connectionOptions = connectionOptions;
        return this;
    }
    withConnectionStrategy(connectionStrategy) {
        this.context.connectionStrategy = connectionStrategy;
        return this;
    }
    withProtocol(protocol) {
        this.context.protocol = protocol;
        return this;
    }
    withStats(stats) {
        this.context.stats = stats;
        return this;
    }
    withAuthentication(authentication) {
        this.context.authentication = authentication;
        return this;
    }
    build() {
        return this.context;
    }
}

module.exports = ContextBuilder;
