import sagaHelper from "redux-saga-testing";
import { call, put } from "redux-saga/effects";
import sinon from "sinon";

import Api from "../api/Api";
import { handleFetchUsers } from ".";

sinon.stub(Api, "fetchUsers").callsFake(() => [{ id: 1, username: "johndoe" }]);

describe("fetching of users", () => {
  const it = sagaHelper(handleFetchUsers());

  it("should fetch some users first", result => {
    expect(result).toEqual(call(Api.fetchUsers));

    return Api.fetchUsers();
  });

  it("should put the fetched users into the store", result => {
    expect(result).toEqual(
      put({
        type: "USERS_FETCH_SUCCEEDED",
        users: [{ id: 1, username: "johndoe" }]
      })
    );
  });
});
