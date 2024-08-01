import React, { useState } from "react";

type PredictiveFeature = {
  patientVolume: number;
  patientAcuity: number;
  weather: string;
  fluActivity: string;
  burnoutRisk: string;
};

const lastWeekData: PredictiveFeature = {
  patientVolume: 120,
  patientAcuity: 3,
  weather: "Cloudy/Rainy",
  fluActivity: "Low",
  burnoutRisk: "Moderate",
};

const thisWeekPrediction: PredictiveFeature = {
  patientVolume: 150,
  patientAcuity: 5,
  weather: "Mostly Sunny",
  fluActivity: "High",
  burnoutRisk: "High",
};

const SummaryScreen: React.FC<{
  onCreateScheduleTap: (path: string) => void;
}> = ({ onCreateScheduleTap }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPredictions, setShowPredictions] = useState(false);

  const calculateStaffingNeeds = () => {
    // Placeholder logic for calculating staffing needs
    const additionalNursesNeeded =
      (thisWeekPrediction.patientVolume - lastWeekData.patientVolume) / 10;
    const additionalDoctorsNeeded =
      thisWeekPrediction.patientAcuity - lastWeekData.patientAcuity;
    return { additionalNursesNeeded, additionalDoctorsNeeded };
  };

  const { additionalNursesNeeded, additionalDoctorsNeeded } =
    calculateStaffingNeeds();

  const handleCreateSchedule = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (!showPredictions) {
        setShowPredictions(true);
      } else {
        onCreateScheduleTap("/schedule");
      }
      setIsLoading(false);
    }, 750);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white p-4">
      <h1 className="mb-4 text-xl font-bold">Schedule Summary</h1>
      <table className="mb-4 w-full table-fixed border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-center font-bold">
              Feature
            </th>
            <th className="border border-gray-300 p-2 text-center">
              Last Week
            </th>
            {showPredictions && (
              <th className="border border-gray-300 p-2 text-center">
                This Week's Prediction
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {Object.entries(lastWeekData).map(([feature, value], index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
            >
              <td className="border border-gray-300 p-2 text-center font-bold capitalize">
                {feature.replace(/([A-Z])/g, " $1").toLowerCase()}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {value}
              </td>
              {showPredictions && (
                <td className="border border-gray-300 p-2 text-center">
                  {thisWeekPrediction[feature as keyof PredictiveFeature]}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {showPredictions && (
        <div className="mb-4 rounded-md border-2 border-blue-500 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-bold">Staffing Recommendations</h2>
          <ul>
            <li>
              {Math.ceil(additionalNursesNeeded)} more nurse shifts during peak
              hours to account for increased patient volume.
            </li>
            <li>
              {Math.ceil(additionalDoctorsNeeded)} more doctor shifts to account
              for predicted increase in patient acuity.
            </li>
            <li>
              Apply anti-burnout scheduling strategy for the following nurses:
              <b> Emily, Linda</b>
            </li>
          </ul>
        </div>
      )}
      <button
        onClick={handleCreateSchedule}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        {isLoading
          ? "Loading.."
          : showPredictions
            ? "Go To Schedule"
            : "Create Prediction"}
      </button>
    </div>
  );
};

export default SummaryScreen;
