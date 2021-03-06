import { All4xxException } from "../src/index";

describe("All4xxException.test", () => {
  it("should return custom message ", () => {
    const wrapper = new All4xxException("");
    const result = wrapper.serializeErrors();
    expect(result).toEqual({ message: "", details: [] });
  });

  it("should return status code 401 ", () => {
    const wrapper = new All4xxException("Unauthorized", 401);
    const result = wrapper.getStatusCode();
    expect(result).toBe(401);
  });

  it("should return status code 404 ", () => {
    const wrapper = new All4xxException("Server Error", 500);
    const result = wrapper.getStatusCode();
    expect(result).toBe(404);
  });

  it("should return the details value", () => {
    const wrapper = new All4xxException("Server Error", 500, [
      { test: "test" },
    ]);
    const result = wrapper.getStatusCode();
    expect(result).toBe(404);
    const result2 = wrapper.serializeErrors();
    expect(result2.details).toEqual([{ test: "test" }]);
  });
});
