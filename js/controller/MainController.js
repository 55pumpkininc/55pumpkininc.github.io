app.controller('MainController',
 ['$scope','genericService',
  function($scope, 
  genericService
  ) 
  { 

    $scope.requestDate = new Date();
    $scope.createDate_T = new Date();
    $scope.status_daily = [5,5];
    $scope.status_overall = [5,5];
   

    $scope.labels = ["SUCCESS", "IN_PROGRESS"];
    $scope.daily_data = [4,4];

    $scope.batchStatus = ''; 
    $scope.batchlookupID = ''; 
    $scope.claim = ''; 
    $scope.batchID = '';
    $scope.articleUrl = '';
    $scope.entity = '';

    $scope.propertyName = 'CLAIM_NUMBER';


        /* Data filtering for Status - START                */

    function isSuccess (value) {
      return value.status=='COMPLETED'
    }

    function isInprogress (value) {
      return value.status=='IN_PROGRESS'
    }

    function isDaily (value) {
      return value.email_received_ts.includes('2020-05-12')
    }

    function filterByDate(value) {
      return value.email_received_ts.includes($scope.inputDate)
    }

        /* Data filtering for Status - END                */ 
/*
    genericService.output('','')
      .success(function(data) {
          $scope.ticketInfoList = data;
      });
 */    

    $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
      };


    $scope.getDetails = function() {
      genericService.output('',3)
        .success(function(data) {
        $scope.details = data;
        });
    }; 

    $scope.parseArticle = function() {
      genericService.output($scope.articleUrl,1)
        .success(function(data) {
        $scope.articleContent = data;
        });
    }; 

    $scope.searchEntity = function() {
      genericService.output($scope.entity,2)
        .success(function(data) {
        $scope.links = data;
        });
    }; 

    $scope.statusFunction = function() {
      genericService.output('', 3)
        .success(function(data) {
          $scope.status_daily[0] = data.filter(isSuccess).filter(isDaily).length;
          $scope.status_daily[1] = data.filter(isInprogress).filter(isDaily).length;

          $scope.status_overall[0] = data.filter(isSuccess).length;
          $scope.status_overall[1] = data.filter(isInprogress).length;

          $scope.daily_S = data.filter(isSuccess).filter(filterByDate);
          $scope.daily_I = data.filter(isInprogress).filter(filterByDate);

  var myConfig = {
  type: "vbar",
  backgroundColor:"#FDFEFE",
  title: {
    align: "center",
    text: "Print Status" ,
    backgroundColor: "#00B906",
    fontColor: "#fff",
    fontSize: 30,
    fontFamily: "sans-serif",
    fontWeight: 'normal',
    offsetX: 0
  },
    subtitle: {
    offsetY: 15,
    text: "Date - " + $scope.requestDate,
    fontFamily: "sans-serif",
    fontSize: 18,
    align: 'left',
    fontColor: "#777",
    offsetX: 10
  },
  tooltip:{
    padding: 10,
    fontSize: 14,
    text: "%v prints -  %t",
    backgroundColor: "#FDFEFE",
    fontColor: "#444",
    borderRadius: "5px",
    borderColor: "#333",
    borderWidth: 1
  },

  legend: {
    offsetY: 80,
    offsetX: 0,
    padding: 10,
    backgroundColor: "transparent",
    borderWidth: "0px",
    highlightPlot: true,
    item: {
      fontSize: 18,
      fontColor: "#666",
      fontFamily: "sans-serif",
      
    },
    marker:{
      borderRadius: 10,
      borderWidth: "0px",
    },
    cursor: "hand"
  },
  plotarea:{
    margin: "100 130 70 100",
  },
  plot:{
    borderRadius: "0 5 5 0",
    barSpace: "0.5",
     animation:{
      effect: 4,
      method: 0,
      sequence: 1
    }
  },
  scaleX: {
    labels: ['Paper <br> Claims','Access <br> Handling'],
    item: {
      fontFamily: "sans-serif",
      fontSize: 16 ,
      fontColor: '#95A5A6'
    },
    lineColor: "#DDD",
    tick:{
      visible: false
    }
  },
  scaleY: {
    label:{
      offsetY: 5,
      text: "Count of Requests",
      fontColor: '#95A5A6',
      fontSize: 14,
      fontFamily: "sans-serif",
    },
    item: {
      fontFamily: "sans-serif",
      fontColor: '#95A5A6',
      fontSize: 14
    },
    lineWidth: 0,
    tick: {
      visible: false
    },
    guide:{
      lineStyle: "solid",
      lineColor: "#DDD"
    }
  },
  series : [  
    {
      text: "Success",
      values: [4820, 8067, 12000, 12100, 12282, 12540],
      //values: [$scope.status_daily[0], $scope.status_overall[0]],
      backgroundColor: "#27AE60",
    },
    {
      text: "Failure",
      //values: [$scope.status_daily[1],$scope.status_overall[1]],
      values: [1420, 4475, 10400, 10600, 7137, 6565],
      backgroundColor: "#E74C3C",
    }
  ]
};
/*
zingchart.render({ 
  id : 'myChart', 
  data : myConfig, 
  height: 500, 
  width: 1100,
  backgroundColor: "transparent"
});

*/




        });        
    };
  }
]);