import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentData = [
        { "id": 1, "name": "John", "math_mark": 85, "physics_mark": 78, "chemistry_mark": 90 },
        { "id": 2, "name": "Emma", "math_mark": 78, "physics_mark": 85, "chemistry_mark": 75 },
        { "id": 3, "name": "Michael", "math_mark": 92, "physics_mark": 90, "chemistry_mark": 88 },
        { "id": 4, "name": "Sophia", "math_mark": 68, "physics_mark": 72, "chemistry_mark": 70 },
        { "id": 5, "name": "William", "math_mark": 75, "physics_mark": 80, "chemistry_mark": 82 },
        { "id": 6, "name": "Olivia", "math_mark": 88, "physics_mark": 85, "chemistry_mark": 90 },
        { "id": 7, "name": "James", "math_mark": 80, "physics_mark": 78, "chemistry_mark": 85 },
        { "id": 8, "name": "Ava", "math_mark": 95, "physics_mark": 92, "chemistry_mark": 94 },
        { "id": 9, "name": "Alexander", "math_mark": 70, "physics_mark": 68, "chemistry_mark": 72 },
        { "id": 10, "name": "Charlotte", "math_mark": 82, "physics_mark": 80, "chemistry_mark": 85 }
    ];
    
    

    return (
        <div>
            <LChart width={500} height={400} data={studentData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>

            <Line dataKey="math_mark"  stroke='red'></Line>
            <Line dataKey={'physics_mark'}  stroke='yellow'></Line>
            </LChart>
            
        </div>
    );
};

export default LineChart;