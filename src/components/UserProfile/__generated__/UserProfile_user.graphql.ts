/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type UserProfile_user$ref = any;
export type UserProfile_user = {
    readonly avatarUrl: any;
    readonly name: string | null;
    readonly login: string;
    readonly bio: string | null;
    readonly company: string | null;
    readonly location: string | null;
    readonly email: string;
    readonly websiteUrl: any | null;
    readonly organizations: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly avatarUrl: any;
                readonly teamsUrl: any;
                readonly url: any;
                readonly login: string;
            } | null;
        } | null> | null;
    };
    readonly repositories: {
        readonly nodes: ReadonlyArray<{
            readonly id: string;
            readonly name: string;
            readonly description: string | null;
            readonly stargazers: {
                readonly totalCount: number;
            };
            readonly forks: {
                readonly totalCount: number;
            };
        } | null> | null;
    };
    readonly " $refType": UserProfile_user$ref;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatarUrl",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "login",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "totalCount",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "UserProfile_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "bio",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "company",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "location",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "websiteUrl",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "organizations",
      "storageKey": "organizations(first:10)",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 10
        }
      ],
      "concreteType": "OrganizationConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "OrganizationEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Organization",
              "plural": false,
              "selections": [
                (v3/*: any*/),
                (v0/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "teamsUrl",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "url",
                  "args": null,
                  "storageKey": null
                },
                (v2/*: any*/)
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "repositories",
      "storageKey": "repositories(last:10)",
      "args": [
        {
          "kind": "Literal",
          "name": "last",
          "value": 10
        }
      ],
      "concreteType": "RepositoryConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "nodes",
          "storageKey": null,
          "args": null,
          "concreteType": "Repository",
          "plural": true,
          "selections": [
            (v3/*: any*/),
            (v1/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "description",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "stargazers",
              "storageKey": null,
              "args": null,
              "concreteType": "StargazerConnection",
              "plural": false,
              "selections": (v4/*: any*/)
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "forks",
              "storageKey": null,
              "args": null,
              "concreteType": "RepositoryConnection",
              "plural": false,
              "selections": (v4/*: any*/)
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = 'b3b263c21186d32fcaee75c2bf3e9b43';
export default node;
