export declare const id: number;
export declare const name: string;
export declare const kind: number;
export declare const flags: {};
export declare const children: ({
    "id": number;
    "name": string;
    "kind": number;
    "kindString": string;
    "flags": {
        "isExported": boolean;
    };
    "originalName": string;
    "children": ({
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {
            "isPrivate": boolean;
            "isExported": boolean;
            "isConst"?: undefined;
            "isProtected"?: undefined;
        };
        "comment": {
            "shortText": string;
        };
        "children": ({
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPrivate": boolean;
                "isExported": boolean;
                "isProtected"?: undefined;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
            };
            "signatures"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isProtected": boolean;
                "isExported": boolean;
                "isPrivate"?: undefined;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
            };
            "signatures"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPrivate": boolean;
                "isExported": boolean;
                "isProtected"?: undefined;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isPrivate": boolean;
                    "isExported": boolean;
                };
                "comment": {
                    "shortText": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "comment"?: undefined;
            "type"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isProtected": boolean;
                "isExported": boolean;
                "isPrivate"?: undefined;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isProtected": boolean;
                    "isExported": boolean;
                };
                "comment": {
                    "shortText": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "comment"?: undefined;
            "type"?: undefined;
        })[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "type"?: undefined;
        "defaultValue"?: undefined;
        "signatures"?: undefined;
    } | {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {
            "isPrivate": boolean;
            "isExported": boolean;
            "isConst": boolean;
            "isProtected"?: undefined;
        };
        "comment": {
            "shortText": string;
        };
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "type": {
            "type": string;
            "value": string;
        };
        "defaultValue": string;
        "children"?: undefined;
        "groups"?: undefined;
        "signatures"?: undefined;
    } | {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {
            "isProtected": boolean;
            "isExported": boolean;
            "isConst": boolean;
            "isPrivate"?: undefined;
        };
        "comment": {
            "shortText": string;
        };
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "type": {
            "type": string;
            "value": string;
        };
        "defaultValue": string;
        "children"?: undefined;
        "groups"?: undefined;
        "signatures"?: undefined;
    } | {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {
            "isPrivate": boolean;
            "isExported": boolean;
            "isConst"?: undefined;
            "isProtected"?: undefined;
        };
        "signatures": {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPrivate": boolean;
                "isExported": boolean;
            };
            "comment": {
                "shortText": string;
            };
            "type": {
                "type": string;
                "name": string;
            };
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "comment"?: undefined;
        "children"?: undefined;
        "groups"?: undefined;
        "type"?: undefined;
        "defaultValue"?: undefined;
    } | {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {
            "isProtected": boolean;
            "isExported": boolean;
            "isPrivate"?: undefined;
            "isConst"?: undefined;
        };
        "signatures": {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isProtected": boolean;
                "isExported": boolean;
            };
            "comment": {
                "shortText": string;
            };
            "type": {
                "type": string;
                "name": string;
            };
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "comment"?: undefined;
        "children"?: undefined;
        "groups"?: undefined;
        "type"?: undefined;
        "defaultValue"?: undefined;
    })[];
    "groups": {
        "title": string;
        "kind": number;
        "children": number[];
    }[];
    "sources": {
        "fileName": string;
        "line": number;
        "character": number;
    }[];
} | {
    "id": number;
    "name": string;
    "kind": number;
    "kindString": string;
    "flags": {
        "isExported": boolean;
    };
    "originalName": string;
    "children": ({
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {
            "isExported": boolean;
            "isAbstract"?: undefined;
            "isConst"?: undefined;
        };
        "children": {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isExported": boolean;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
            };
            "defaultValue": string;
        }[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "comment"?: undefined;
        "extendedBy"?: undefined;
        "extendedTypes"?: undefined;
        "type"?: undefined;
        "defaultValue"?: undefined;
    } | {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {
            "isAbstract": boolean;
            "isExported"?: undefined;
            "isConst"?: undefined;
        };
        "comment": {
            "shortText": string;
            "text"?: undefined;
            "tags"?: undefined;
        };
        "children": {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {};
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "comment": {
                    "shortText": string;
                };
                "parameters": {
                    "id": number;
                    "name": string;
                    "kind": number;
                    "kindString": string;
                    "flags": {};
                    "type": {
                        "type": string;
                        "name": string;
                    };
                }[];
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
        }[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "extendedBy"?: undefined;
        "extendedTypes"?: undefined;
        "type"?: undefined;
        "defaultValue"?: undefined;
    } | {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {
            "isExported": boolean;
            "isAbstract": boolean;
            "isConst"?: undefined;
        };
        "children": ({
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isExported": boolean;
                "isAbstract": boolean;
                "isProtected"?: undefined;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
            };
            "signatures"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isProtected": boolean;
                "isExported": boolean;
                "isAbstract": boolean;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isExported": boolean;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type"?: undefined;
        })[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "extendedBy": {
            "type": string;
            "id": number;
            "name": string;
        }[];
        "comment"?: undefined;
        "extendedTypes"?: undefined;
        "type"?: undefined;
        "defaultValue"?: undefined;
    } | {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {
            "isExported": boolean;
            "isAbstract"?: undefined;
            "isConst"?: undefined;
        };
        "children": ({
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isExported": boolean;
                "isProtected"?: undefined;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
            };
            "overwrites": {
                "type": string;
                "id": number;
                "name": string;
            };
            "signatures"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isProtected": boolean;
                "isExported": boolean;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isExported": boolean;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
                "overwrites": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "overwrites": {
                "type": string;
                "id": number;
                "name": string;
            };
            "type"?: undefined;
        })[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "extendedTypes": {
            "type": string;
            "id": number;
            "name": string;
        }[];
        "comment"?: undefined;
        "extendedBy"?: undefined;
        "type"?: undefined;
        "defaultValue"?: undefined;
    } | {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {
            "isExported": boolean;
            "isAbstract"?: undefined;
            "isConst"?: undefined;
        };
        "comment": {
            "shortText": string;
            "text": string;
            "tags": {
                "tag": string;
                "text": string;
            }[];
        };
        "children": ({
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isExported": boolean;
                "isPrivate"?: undefined;
                "isPublic"?: undefined;
                "isStatic"?: undefined;
                "isProtected"?: undefined;
            };
            "comment": {
                "shortText": string;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isExported": boolean;
                };
                "comment": {
                    "shortText": string;
                };
                "type": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPrivate": boolean;
                "isExported": boolean;
                "isPublic"?: undefined;
                "isStatic"?: undefined;
                "isProtected"?: undefined;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "elementType": {
                    "type": string;
                    "name": string;
                };
                "name"?: undefined;
                "id"?: undefined;
            };
            "signatures"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPublic": boolean;
                "isExported": boolean;
                "isPrivate"?: undefined;
                "isStatic"?: undefined;
                "isProtected"?: undefined;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
                "elementType"?: undefined;
                "id"?: undefined;
            };
            "signatures"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isStatic": boolean;
                "isExported": boolean;
                "isPrivate"?: undefined;
                "isPublic"?: undefined;
                "isProtected"?: undefined;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "id": number;
                "name": string;
                "elementType"?: undefined;
            };
            "signatures"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isExported": boolean;
                "isPrivate"?: undefined;
                "isPublic"?: undefined;
                "isStatic"?: undefined;
                "isProtected"?: undefined;
            };
            "comment": {
                "shortText": string;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isExported": boolean;
                };
                "comment": {
                    "shortText": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPrivate": boolean;
                "isExported": boolean;
                "isPublic"?: undefined;
                "isStatic"?: undefined;
                "isProtected"?: undefined;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isExported": boolean;
                };
                "comment": {
                    "shortText": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "comment"?: undefined;
            "type"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isProtected": boolean;
                "isExported": boolean;
                "isPrivate"?: undefined;
                "isPublic"?: undefined;
                "isStatic"?: undefined;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isExported": boolean;
                };
                "comment": {
                    "shortText": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "comment"?: undefined;
            "type"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPublic": boolean;
                "isExported": boolean;
                "isPrivate"?: undefined;
                "isStatic"?: undefined;
                "isProtected"?: undefined;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isExported": boolean;
                };
                "comment": {
                    "shortText": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "comment"?: undefined;
            "type"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isStatic": boolean;
                "isExported": boolean;
                "isPrivate"?: undefined;
                "isPublic"?: undefined;
                "isProtected"?: undefined;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isExported": boolean;
                };
                "comment": {
                    "shortText": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "comment"?: undefined;
            "type"?: undefined;
        })[];
        "groups": ({
            "title": string;
            "kind": number;
            "children": number[];
            "categories"?: undefined;
        } | {
            "title": string;
            "kind": number;
            "children": number[];
            "categories": {
                "title": string;
                "children": number[];
            }[];
        })[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "extendedBy": {
            "type": string;
            "id": number;
            "name": string;
        }[];
        "extendedTypes"?: undefined;
        "type"?: undefined;
        "defaultValue"?: undefined;
    } | {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {
            "isExported": boolean;
            "isAbstract"?: undefined;
            "isConst"?: undefined;
        };
        "children": ({
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isExported": boolean;
                "isPrivate"?: undefined;
                "isConstructorProperty"?: undefined;
                "isPublic"?: undefined;
                "isStatic"?: undefined;
                "isProtected"?: undefined;
            };
            "comment": {
                "shortText": string;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isExported": boolean;
                };
                "comment": {
                    "shortText": string;
                };
                "parameters": {
                    "id": number;
                    "name": string;
                    "kind": number;
                    "kindString": string;
                    "flags": {
                        "isExported": boolean;
                    };
                    "comment": {
                        "shortText": string;
                    };
                    "type": {
                        "type": string;
                        "name": string;
                    };
                }[];
                "type": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
                "overwrites": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "overwrites": {
                "type": string;
                "id": number;
                "name": string;
            };
            "type"?: undefined;
            "inheritedFrom"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPrivate": boolean;
                "isExported": boolean;
                "isConstructorProperty": boolean;
                "isPublic"?: undefined;
                "isStatic"?: undefined;
                "isProtected"?: undefined;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
                "id"?: undefined;
            };
            "signatures"?: undefined;
            "overwrites"?: undefined;
            "inheritedFrom"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPublic": boolean;
                "isExported": boolean;
                "isConstructorProperty": boolean;
                "isPrivate"?: undefined;
                "isStatic"?: undefined;
                "isProtected"?: undefined;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
                "id"?: undefined;
            };
            "signatures"?: undefined;
            "overwrites"?: undefined;
            "inheritedFrom"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPublic": boolean;
                "isExported": boolean;
                "isPrivate"?: undefined;
                "isConstructorProperty"?: undefined;
                "isStatic"?: undefined;
                "isProtected"?: undefined;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
                "id"?: undefined;
            };
            "inheritedFrom": {
                "type": string;
                "id": number;
                "name": string;
            };
            "signatures"?: undefined;
            "overwrites"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isStatic": boolean;
                "isExported": boolean;
                "isPrivate"?: undefined;
                "isConstructorProperty"?: undefined;
                "isPublic"?: undefined;
                "isProtected"?: undefined;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "id": number;
                "name": string;
            };
            "inheritedFrom": {
                "type": string;
                "id": number;
                "name": string;
            };
            "signatures"?: undefined;
            "overwrites"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isExported": boolean;
                "isPrivate"?: undefined;
                "isConstructorProperty"?: undefined;
                "isPublic"?: undefined;
                "isStatic"?: undefined;
                "isProtected"?: undefined;
            };
            "comment": {
                "shortText": string;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isExported": boolean;
                };
                "comment": {
                    "shortText": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
                "inheritedFrom": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "inheritedFrom": {
                "type": string;
                "id": number;
                "name": string;
            };
            "overwrites"?: undefined;
            "type"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isExported": boolean;
                "isPrivate"?: undefined;
                "isConstructorProperty"?: undefined;
                "isPublic"?: undefined;
                "isStatic"?: undefined;
                "isProtected"?: undefined;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isExported": boolean;
                };
                "comment": {
                    "shortText": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "comment"?: undefined;
            "overwrites"?: undefined;
            "type"?: undefined;
            "inheritedFrom"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isProtected": boolean;
                "isExported": boolean;
                "isPrivate"?: undefined;
                "isConstructorProperty"?: undefined;
                "isPublic"?: undefined;
                "isStatic"?: undefined;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isExported": boolean;
                };
                "comment": {
                    "shortText": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
                "overwrites": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "overwrites": {
                "type": string;
                "id": number;
                "name": string;
            };
            "comment"?: undefined;
            "type"?: undefined;
            "inheritedFrom"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPublic": boolean;
                "isExported": boolean;
                "isPrivate"?: undefined;
                "isConstructorProperty"?: undefined;
                "isStatic"?: undefined;
                "isProtected"?: undefined;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isExported": boolean;
                };
                "comment": {
                    "shortText": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
                "overwrites": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "overwrites": {
                "type": string;
                "id": number;
                "name": string;
            };
            "comment"?: undefined;
            "type"?: undefined;
            "inheritedFrom"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isStatic": boolean;
                "isExported": boolean;
                "isPrivate"?: undefined;
                "isConstructorProperty"?: undefined;
                "isPublic"?: undefined;
                "isProtected"?: undefined;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isExported": boolean;
                };
                "comment": {
                    "shortText": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "comment"?: undefined;
            "overwrites"?: undefined;
            "type"?: undefined;
            "inheritedFrom"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isStatic": boolean;
                "isExported": boolean;
                "isPrivate"?: undefined;
                "isConstructorProperty"?: undefined;
                "isPublic"?: undefined;
                "isProtected"?: undefined;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isExported": boolean;
                };
                "comment": {
                    "shortText": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
                "inheritedFrom": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "inheritedFrom": {
                "type": string;
                "id": number;
                "name": string;
            };
            "comment"?: undefined;
            "overwrites"?: undefined;
            "type"?: undefined;
        })[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "extendedTypes": {
            "type": string;
            "id": number;
            "name": string;
        }[];
        "comment"?: undefined;
        "extendedBy"?: undefined;
        "type"?: undefined;
        "defaultValue"?: undefined;
    } | {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {
            "isConst": boolean;
            "isExported"?: undefined;
            "isAbstract"?: undefined;
        };
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "type": {
            "type": string;
            "value": string;
        };
        "defaultValue": string;
        "children"?: undefined;
        "groups"?: undefined;
        "comment"?: undefined;
        "extendedBy"?: undefined;
        "extendedTypes"?: undefined;
    })[];
    "groups": {
        "title": string;
        "kind": number;
        "children": number[];
    }[];
    "sources": {
        "fileName": string;
        "line": number;
        "character": number;
    }[];
} | {
    "id": number;
    "name": string;
    "kind": number;
    "kindString": string;
    "flags": {
        "isExported": boolean;
    };
    "originalName": string;
    "children": ({
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {
            "isExported": boolean;
        };
        "children": {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isStatic": boolean;
                "isExported": boolean;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
            };
            "defaultValue": string;
        }[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "extendedTypes": {
            "type": string;
            "id": number;
            "name": string;
        }[];
        "extendedBy"?: undefined;
    } | {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {
            "isExported": boolean;
        };
        "children": {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isStatic": boolean;
                "isExported": boolean;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
            };
            "defaultValue": string;
        }[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "extendedBy": {
            "type": string;
            "id": number;
            "name": string;
        }[];
        "extendedTypes"?: undefined;
    })[];
    "groups": {
        "title": string;
        "kind": number;
        "children": number[];
    }[];
    "sources": {
        "fileName": string;
        "line": number;
        "character": number;
    }[];
} | {
    "id": number;
    "name": string;
    "kind": number;
    "kindString": string;
    "flags": {
        "isExported": boolean;
    };
    "originalName": string;
    "children": ({
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {};
        "comment": {
            "shortText": string;
        };
        "children": ({
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isConstructorProperty"?: undefined;
                "isPublic"?: undefined;
            };
            "comment": {
                "shortText"?: undefined;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "comment": {};
                "parameters": {
                    "id": number;
                    "name": string;
                    "kind": number;
                    "kindString": string;
                    "flags": {};
                    "comment": {
                        "shortText": string;
                    };
                    "type": {
                        "type": string;
                        "name": string;
                    };
                }[];
                "type": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isConstructorProperty": boolean;
                "isPublic"?: undefined;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
            };
            "signatures"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPublic": boolean;
                "isConstructorProperty": boolean;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
            };
            "signatures"?: undefined;
        })[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "extendedBy": {
            "type": string;
            "id": number;
            "name": string;
        }[];
        "extendedTypes"?: undefined;
    } | {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {};
        "comment": {
            "shortText": string;
        };
        "children": ({
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isConstructorProperty"?: undefined;
                "isPublic"?: undefined;
            };
            "comment": {
                "shortText"?: undefined;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "comment": {};
                "parameters": {
                    "id": number;
                    "name": string;
                    "kind": number;
                    "kindString": string;
                    "flags": {};
                    "comment": {
                        "shortText": string;
                    };
                    "type": {
                        "type": string;
                        "name": string;
                    };
                }[];
                "type": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
                "overwrites": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "overwrites": {
                "type": string;
                "id": number;
                "name": string;
            };
            "type"?: undefined;
            "inheritedFrom"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isConstructorProperty": boolean;
                "isPublic"?: undefined;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
            };
            "overwrites": {
                "type": string;
                "id": number;
                "name": string;
            };
            "signatures"?: undefined;
            "inheritedFrom"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPublic": boolean;
                "isConstructorProperty": boolean;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
            };
            "inheritedFrom": {
                "type": string;
                "id": number;
                "name": string;
            };
            "signatures"?: undefined;
            "overwrites"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPublic": boolean;
                "isConstructorProperty": boolean;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
            };
            "overwrites": {
                "type": string;
                "id": number;
                "name": string;
            };
            "signatures"?: undefined;
            "inheritedFrom"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPublic": boolean;
                "isConstructorProperty": boolean;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
            };
            "signatures"?: undefined;
            "overwrites"?: undefined;
            "inheritedFrom"?: undefined;
        })[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "extendedTypes": {
            "type": string;
            "id": number;
            "name": string;
        }[];
        "extendedBy"?: undefined;
    })[];
    "groups": {
        "title": string;
        "kind": number;
        "children": number[];
    }[];
    "sources": {
        "fileName": string;
        "line": number;
        "character": number;
    }[];
} | {
    "id": number;
    "name": string;
    "kind": number;
    "kindString": string;
    "flags": {
        "isExported": boolean;
    };
    "originalName": string;
    "children": ({
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {};
        "comment": {
            "shortText": string;
        };
        "decorators": {
            "name": string;
            "type": {
                "type": string;
                "id": number;
                "name": string;
            };
            "arguments": {
                "options": string;
            };
        }[];
        "children": {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {};
            "decorators": ({
                "name": string;
                "type": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
                "arguments"?: undefined;
            } | {
                "name": string;
                "type": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
                "arguments": {
                    "value": string;
                };
            })[];
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "comment": {
                    "shortText": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
        }[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "decorates"?: undefined;
        "signatures"?: undefined;
    } | {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {};
        "decorates": {
            "type": string;
            "id": number;
            "name": string;
        }[];
        "signatures": {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {};
            "comment": {
                "shortText": string;
            };
            "parameters": ({
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "type": {
                    "type": string;
                    "name": string;
                    "types"?: undefined;
                    "typeArguments"?: undefined;
                };
            } | {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "type": {
                    "type": string;
                    "types": {
                        "type": string;
                        "name": string;
                    }[];
                    "name"?: undefined;
                    "typeArguments"?: undefined;
                };
            } | {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "type": {
                    "type": string;
                    "typeArguments": {
                        "type": string;
                        "name": string;
                    }[];
                    "name": string;
                    "types"?: undefined;
                };
            })[];
            "type": {
                "type": string;
                "name": string;
            };
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "comment"?: undefined;
        "decorators"?: undefined;
        "children"?: undefined;
        "groups"?: undefined;
    } | {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {};
        "decorates": {
            "type": string;
            "id": number;
            "name": string;
        }[];
        "signatures": {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {};
            "comment": {
                "shortText": string;
            };
            "parameters": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "comment": {
                    "text": string;
                };
                "type": {
                    "type": string;
                    "declaration": {
                        "id": number;
                        "name": string;
                        "kind": number;
                        "kindString": string;
                        "flags": {};
                        "children": {
                            "id": number;
                            "name": string;
                            "kind": number;
                            "kindString": string;
                            "flags": {};
                            "comment": {
                                "text": string;
                            };
                            "sources": {
                                "fileName": string;
                                "line": number;
                                "character": number;
                            }[];
                            "type": {
                                "type": string;
                                "name": string;
                            };
                        }[];
                        "groups": {
                            "title": string;
                            "kind": number;
                            "children": number[];
                        }[];
                        "sources": {
                            "fileName": string;
                            "line": number;
                            "character": number;
                        }[];
                    };
                };
            }[];
            "type": {
                "type": string;
                "name": string;
            };
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "comment"?: undefined;
        "decorators"?: undefined;
        "children"?: undefined;
        "groups"?: undefined;
    } | {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {};
        "decorates": {
            "type": string;
            "id": number;
            "name": string;
        }[];
        "signatures": {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {};
            "comment": {
                "shortText": string;
            };
            "parameters": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "comment": {
                    "text": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "type": {
                "type": string;
                "name": string;
            };
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "comment"?: undefined;
        "decorators"?: undefined;
        "children"?: undefined;
        "groups"?: undefined;
    })[];
    "groups": {
        "title": string;
        "kind": number;
        "children": number[];
    }[];
    "sources": {
        "fileName": string;
        "line": number;
        "character": number;
    }[];
} | {
    "id": number;
    "name": string;
    "kind": number;
    "kindString": string;
    "flags": {
        "isExported": boolean;
    };
    "originalName": string;
    "children": {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {};
        "children": {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isStatic": boolean;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
            };
            "defaultValue": string;
        }[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
    }[];
    "groups": {
        "title": string;
        "kind": number;
        "children": number[];
    }[];
    "sources": {
        "fileName": string;
        "line": number;
        "character": number;
    }[];
} | {
    "id": number;
    "name": string;
    "kind": number;
    "kindString": string;
    "flags": {
        "isExported": boolean;
    };
    "originalName": string;
    "children": {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {};
        "comment": {
            "shortText": string;
            "tags": {
                "tag": string;
                "text": string;
            }[];
        };
        "children": {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {};
            "signatures": ({
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "comment": {
                    "shortText": string;
                };
                "parameters": ({
                    "id": number;
                    "name": string;
                    "kind": number;
                    "kindString": string;
                    "flags": {};
                    "comment": {
                        "text": string;
                    };
                    "type": {
                        "type": string;
                        "name": string;
                        "declaration"?: undefined;
                    };
                } | {
                    "id": number;
                    "name": string;
                    "kind": number;
                    "kindString": string;
                    "flags": {};
                    "comment": {
                        "text": string;
                    };
                    "type": {
                        "type": string;
                        "declaration": {
                            "id": number;
                            "name": string;
                            "kind": number;
                            "kindString": string;
                            "flags": {};
                            "signatures": {
                                "id": number;
                                "name": string;
                                "kind": number;
                                "kindString": string;
                                "flags": {};
                                "parameters": {
                                    "id": number;
                                    "name": string;
                                    "kind": number;
                                    "kindString": string;
                                    "flags": {};
                                    "type": {
                                        "type": string;
                                        "name": string;
                                    };
                                }[];
                                "type": {
                                    "type": string;
                                    "name": string;
                                };
                            }[];
                            "sources": {
                                "fileName": string;
                                "line": number;
                                "character": number;
                            }[];
                        };
                        "name"?: undefined;
                    };
                })[];
                "type": {
                    "type": string;
                    "name": string;
                };
            } | {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "comment": {
                    "shortText": string;
                };
                "parameters": ({
                    "id": number;
                    "name": string;
                    "kind": number;
                    "kindString": string;
                    "flags": {};
                    "comment": {
                        "text": string;
                    };
                    "type": {
                        "type": string;
                        "value": string;
                        "declaration"?: undefined;
                    };
                } | {
                    "id": number;
                    "name": string;
                    "kind": number;
                    "kindString": string;
                    "flags": {};
                    "comment": {
                        "text": string;
                    };
                    "type": {
                        "type": string;
                        "declaration": {
                            "id": number;
                            "name": string;
                            "kind": number;
                            "kindString": string;
                            "flags": {};
                            "signatures": {
                                "id": number;
                                "name": string;
                                "kind": number;
                                "kindString": string;
                                "flags": {};
                                "parameters": {
                                    "id": number;
                                    "name": string;
                                    "kind": number;
                                    "kindString": string;
                                    "flags": {};
                                    "type": {
                                        "type": string;
                                        "name": string;
                                    };
                                }[];
                                "type": {
                                    "type": string;
                                    "name": string;
                                };
                            }[];
                            "sources": {
                                "fileName": string;
                                "line": number;
                                "character": number;
                            }[];
                        };
                        "value"?: undefined;
                    };
                })[];
                "type": {
                    "type": string;
                    "name": string;
                };
            })[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
        }[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
    }[];
    "groups": {
        "title": string;
        "kind": number;
        "children": number[];
    }[];
    "sources": {
        "fileName": string;
        "line": number;
        "character": number;
    }[];
} | {
    "id": number;
    "name": string;
    "kind": number;
    "kindString": string;
    "flags": {
        "isExported": boolean;
    };
    "originalName": string;
    "children": ({
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {};
        "comment": {
            "shortText": string;
        };
        "typeParameter": {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {};
            "comment": {
                "shortText": string;
            };
        }[];
        "children": ({
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isProtected"?: undefined;
            };
            "comment": {
                "shortText": string;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "comment": {
                    "shortText": string;
                };
                "parameters": {
                    "id": number;
                    "name": string;
                    "kind": number;
                    "kindString": string;
                    "flags": {};
                    "comment": {
                        "shortText": string;
                    };
                    "type": {
                        "type": string;
                        "name": string;
                    };
                }[];
                "type": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isProtected": boolean;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
                "elementType"?: undefined;
            };
            "signatures"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isProtected": boolean;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "elementType": {
                    "type": string;
                    "name": string;
                };
                "name"?: undefined;
            };
            "signatures"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isProtected"?: undefined;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "comment": {
                    "shortText": string;
                    "returns": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "comment"?: undefined;
            "type"?: undefined;
        })[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "extendedBy": {
            "type": string;
            "id": number;
            "name": string;
        }[];
        "extendedTypes"?: undefined;
    } | {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {};
        "comment": {
            "shortText": string;
        };
        "children": ({
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isProtected"?: undefined;
            };
            "comment": {
                "shortText": string;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "comment": {
                    "shortText": string;
                };
                "parameters": {
                    "id": number;
                    "name": string;
                    "kind": number;
                    "kindString": string;
                    "flags": {};
                    "comment": {
                        "shortText": string;
                    };
                    "type": {
                        "type": string;
                        "name": string;
                    };
                }[];
                "type": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
                "inheritedFrom": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "inheritedFrom": {
                "type": string;
                "id": number;
                "name": string;
            };
            "type"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isProtected": boolean;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
                "elementType"?: undefined;
            };
            "inheritedFrom": {
                "type": string;
                "id": number;
                "name": string;
            };
            "signatures"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isProtected": boolean;
            };
            "comment": {
                "shortText": string;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "elementType": {
                    "type": string;
                    "name": string;
                };
                "name"?: undefined;
            };
            "inheritedFrom": {
                "type": string;
                "id": number;
                "name": string;
            };
            "signatures"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isProtected"?: undefined;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "comment": {
                    "shortText": string;
                    "returns": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
                "inheritedFrom": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "inheritedFrom": {
                "type": string;
                "id": number;
                "name": string;
            };
            "comment"?: undefined;
            "type"?: undefined;
        })[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "extendedTypes": {
            "type": string;
            "id": number;
            "typeArguments": {
                "type": string;
                "name": string;
            }[];
            "name": string;
        }[];
        "typeParameter"?: undefined;
        "extendedBy"?: undefined;
    })[];
    "groups": {
        "title": string;
        "kind": number;
        "children": number[];
    }[];
    "sources": {
        "fileName": string;
        "line": number;
        "character": number;
    }[];
} | {
    "id": number;
    "name": string;
    "kind": number;
    "kindString": string;
    "flags": {
        "isExported": boolean;
    };
    "originalName": string;
    "children": {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {};
        "children": ({
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPrivate": boolean;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
            };
            "getSignature"?: undefined;
            "setSignature"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPrivate"?: undefined;
            };
            "getSignature": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "setSignature": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "parameters": {
                    "id": number;
                    "name": string;
                    "kind": number;
                    "kindString": string;
                    "flags": {};
                    "type": {
                        "type": string;
                        "name": string;
                    };
                }[];
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPrivate"?: undefined;
            };
            "getSignature": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type"?: undefined;
            "setSignature"?: undefined;
        } | {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPrivate"?: undefined;
            };
            "setSignature": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {};
                "parameters": {
                    "id": number;
                    "name": string;
                    "kind": number;
                    "kindString": string;
                    "flags": {};
                    "type": {
                        "type": string;
                        "name": string;
                    };
                }[];
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type"?: undefined;
            "getSignature"?: undefined;
        })[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
    }[];
    "groups": {
        "title": string;
        "kind": number;
        "children": number[];
    }[];
    "sources": {
        "fileName": string;
        "line": number;
        "character": number;
    }[];
} | {
    "id": number;
    "name": string;
    "kind": number;
    "kindString": string;
    "flags": {
        "isExported": boolean;
    };
    "originalName": string;
    "children": {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {
            "isExported": boolean;
        };
        "comment": {
            "shortText": string;
            "text": string;
        };
        "children": {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isPublic": boolean;
                "isExported": boolean;
            };
            "signatures": {
                "id": number;
                "name": string;
                "kind": number;
                "kindString": string;
                "flags": {
                    "isExported": boolean;
                };
                "comment": {
                    "shortText": string;
                };
                "type": {
                    "type": string;
                    "name": string;
                };
            }[];
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
        }[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
    }[];
    "groups": {
        "title": string;
        "kind": number;
        "children": number[];
    }[];
    "sources": {
        "fileName": string;
        "line": number;
        "character": number;
    }[];
} | {
    "id": number;
    "name": string;
    "kind": number;
    "kindString": string;
    "flags": {
        "isExported": boolean;
    };
    "originalName": string;
    "children": ({
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {
            "isExported": boolean;
        };
        "typeParameter": {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isExported": boolean;
            };
            "type": {
                "type": string;
                "operator": string;
                "target": {
                    "type": string;
                    "id": number;
                    "name": string;
                };
            };
        }[];
        "children": {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isExported": boolean;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
                "constraint": {
                    "type": string;
                    "operator": string;
                    "target": {
                        "type": string;
                        "id": number;
                        "name": string;
                    };
                };
            };
        }[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "comment"?: undefined;
    } | {
        "id": number;
        "name": string;
        "kind": number;
        "kindString": string;
        "flags": {
            "isExported": boolean;
        };
        "comment": {
            "shortText": string;
            "text": string;
            "tags": {
                "tag": string;
                "text": string;
            }[];
        };
        "children": {
            "id": number;
            "name": string;
            "kind": number;
            "kindString": string;
            "flags": {
                "isExported": boolean;
            };
            "sources": {
                "fileName": string;
                "line": number;
                "character": number;
            }[];
            "type": {
                "type": string;
                "name": string;
            };
        }[];
        "groups": {
            "title": string;
            "kind": number;
            "children": number[];
        }[];
        "sources": {
            "fileName": string;
            "line": number;
            "character": number;
        }[];
        "typeParameter"?: undefined;
    })[];
    "groups": {
        "title": string;
        "kind": number;
        "children": number[];
    }[];
    "sources": {
        "fileName": string;
        "line": number;
        "character": number;
    }[];
})[];
export declare const groups: {
    "title": string;
    "kind": number;
    "children": number[];
}[];
