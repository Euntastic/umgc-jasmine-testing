describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  describe("The updateServerTable() function.", () => {
    it('Should populate #serverTable when called.', () => {
      submitServerInfo();
      updateServerTable();
      const testServerTable = document.querySelectorAll('#serverTable tbody tr td');
      // console.log(testServerTable);
      expect(testServerTable[0].innerText).toBe('Alice');
      expect(testServerTable[1].innerText).toBe('$0.00');
    });
  });

  describe("The submitServerInfo() function.", () => {
    it('Should add a new server to the allServers Object.', function () {
      submitServerInfo();

      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });

    it('Should not add a new server with empty input.', () => {
      serverNameInput.value = '';
      submitServerInfo();
      // console.log(allServers);
      expect(Object.keys(allServers).length).toEqual(0);
    })
  });

  afterEach(function () {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});
