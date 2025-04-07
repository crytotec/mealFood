import { useState } from "react";
import './meal.css';
import { jsPDF } from "jspdf"; 
import html2canvas from 'html2canvas'; 

function Meal({ meal, setMeal }) {

  const handleDelete = (del) => {
    const dele = meal.filter((item) => item.id !== del.id);
    setMeal(dele);
  };


  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Meal List", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Image", 20, 30);
    doc.text("Name", 50, 30);
    doc.text("Category", 120, 30);

    let yPosition = 40;
    meal.forEach((item, index) => {
      const imageElement = document.getElementById(`image-${item.id}`);

      html2canvas(imageElement).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        
        doc.addImage(imgData, "PNG", 20, yPosition, 20, 20); 
        

        doc.text(item.name, 50, yPosition + 10);
        doc.text(item.category, 120, yPosition + 10);

        yPosition += 30;
        if (index === meal.length - 1) {

          doc.save("meal-list.pdf");
        }
      });
    });
  };

  return (
    <div className="body">
      {meal.length > 0 ? (
        <>
          <table>
            <thead>    
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Delete</th>
              </tr>        
            </thead>

            <tbody>
              {
                meal.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img id={`image-${item.id}`} className='imag' src={item.img} alt={item.name} />
                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td>
                      {item.category}
                    </td>
                    <td>
                      <button onClick={() => handleDelete(item)}>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <button onClick={downloadPDF}>Download PDF</button>
        </>
      ) : (
        <p className="Empty">No meals added yet.</p>
      )}
    </div>
  );
}

export default Meal;
