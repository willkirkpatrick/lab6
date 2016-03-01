var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
            var d = new Date();
            var s = Math.floor(d/1000);
            return String(s);
        },
		UnixMillisecond: function(){
            var d = new Date();
            var m = d.getTime();
            return m
        }
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
                  var d = new Date();
                  var hr = d.getHours();
                  if (hr > 12) {
                      var a = "PM";
                      hr = hr - 12;
                   }else if ( hr < 12 ) {
                       var a = "AM";                    
                   }else if (hr == 0) {
                       hr = 12;
                       var a = "AM";
                   }
                   var min = d.getMinutes();
                   if (min < 10) {
                       min = ("0" + String(min));
                   }
                   var sec = d.getSeconds();
                   if (sec < 10) {
                       sec = ("0" + String(sec));
                   }
                   var time = (hr + ":" + min + ":" + sec + " " + a);
                  return String(time);
              },
	   	    WithOutSeconds: function() {
                var d = new Date();
                  var hr = d.getHours();
                  console.log(hr);
                  if (hr > 12) {
                      var a = "PM";
                      hr = hr - 12;
                   }else if ( hr < 12 ) {
                       var a = "AM";                    
                   }else if (hr == 0) {
                       hr = 12;
                       var a = "AM";
                   }
                   var min = d.getMinutes();
                   if (min < 10) {
                       min = ("0" + String(min));
                   }
                   var time = (hr + ":" + min + " " + a);
                  return String(time);   
               }
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
                var d = new Date();
                var m = d.getMonth() + 1;
                var day = d.getDate();
                var y = d.getFullYear();
                var nd = (m + "/" + day + "/" + y);
                return String(nd);
            },
			Name: function(){
                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var d = new Date();
                var thisMonth = months[d.getMonth()];
                var day = d.getDate();
                var yr = d.getFullYear();
                var nam = (thisMonth + " " + day + "," + " " + yr);
                return String(nam);
            }
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
                var d = new Date();
                var sec = d.getSeconds();
                return String(sec);
                
            },
			DblDigit: function(){
                var d = new Date();
                var sec = d.getSeconds();
                if (sec < 10) {
                    sec = ("0" + String(sec));
                }else {
                    sec = String(sec);    
                }
                return sec;
            }
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
                var d = new Date();
                var min = d.getMinutes();
                
                return String(min);
            },
			DblDigit: function(){
                var d = new Date();
                var min = d.getMinutes();
                if (min < 10) {
                    min = ("0" + String(min));
                }else {
                    min = String(min);    
                }
                return min;
             }
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {},
			TwelveHour: function() {},
			AMPM: (function() {
				return {
					UpperCase: function(){
                        var d = new Date();
                        var hr = d.getHours();
                        if (hr > 12) {
                            var a = "PM";
                        }else { 
                            var a = "AM";    
                        }
                        return a;
                    },
					LowerCase: function(){
                        var d = new Date();
                        var hr = d.getHours();
                        if (hr > 12) {
                            var a = "pm";
                        }else { 
                            var a = "am";    
                        }
                        return a;
                    }
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
                var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                var d = new Date();
                var day = 
            },
			AbrDayOfWeek: function(){},
			FirstTwoOfWeek: function(){},
			WeekOfYear: function(){}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){},
					Ordinal: function(){},
					DateDblDigit: function(){}
				}
			})(),
			MonthNumber: function(){
                var date = new Date();
                var month = date.getMonth() + 1;
                return String(month);
            },
			MonthNumberDblDigit: function(){},
			AbrOfCurrentMonth: function(){
               
            },
			CurrentMonth: function(){}
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){},
					Ordinal: function(){}
				}
			})(),
			YearFull: function(){},
			YearAbr: function(){}
		}
	})(),
	Defaults: function(){}
  }
})();