
        import React from 'react';
        import data from "./dashboard.json"
        
        const Dashboard= () => {
          const { categories } = data;
          console.log(data,"data")
        
          return (
            <div>
               
              {
              categories.map(category => (
                <div key={category.id}>
                  <h2>{category.name}</h2>
                 
                 
                  <ul>
                    {/* {category.widgets.map(widget => (
                      <li key={widget.widgetId}>
                        {widget.widgetName}: {widget.widgetText}
                      </li>
                    ))} */}
                  </ul>
                </div>
              ))}
            </div>
          );
        };
        
        export default Dashboard;
        







