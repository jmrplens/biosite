const NETDATA_BADGES_AUTOREFRESH_SECONDS = 1;
    function refreshNetdataBadges() {
      const now = new Date().getTime().toString();
      $('.netdata-badge').each(function() {
        this.src = this.src.replace(/&_=\d*/, '') + '&_=' + now;
      });
      setTimeout(refreshNetdataBadges, NETDATA_BADGES_AUTOREFRESH_SECONDS * 1000);
    }
    setTimeout(refreshNetdataBadges, NETDATA_BADGES_AUTOREFRESH_SECONDS * 1000);
