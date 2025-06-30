import React from "react";
import {Grid} from "@mui/system";
import AssessmentIcon from '@mui/icons-material/Assessment';

import { Card, CardContent } from '@mui/material';


const Inventory = () => {
    return (
        <div>
            {/* Header section */}
            <div className="pb-10">
                <h1 className="text-xl">Inventory</h1>
            </div>

            <section>

                <Grid container spacing={2} >
                    {/* Inventory Summary */}

                    <Grid size={4}>
                        <Card className="shadow-md rounded-full">
                            <CardContent className="bg-white px-6 py-4 flex flex-col space-y-4 rounded-full">

                                {/* Header */}
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-semibold">Inventory Summary</span>
                                    <AssessmentIcon className="text-gray-500" />
                                </div>

                                {/* Summary Items */}
                                <div className="flex flex-col gap-7">
                                    <div className="flex justify-between">
                                        <span  className="text-gray-600">Total Stock</span>
                                        <span className="text-black font-semibold">--</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span  className="text-gray-600">Total Products</span>
                                        <span className="text-black font-semibold">--</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span  className="text-gray-600">Low Stock Items</span>
                                        <span className="text-yellow-600 font-semibold">--</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span  className="text-gray-600">Out of Stock Items</span>
                                        <span className="text-red-600 font-semibold">10</span>
                                    </div>
                                </div>

                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={8}>
                        <p>box 2</p>
                    </Grid>

                    {/* Product breakdown */}
                    <Grid size={8}>

                    </Grid>

                    <Grid size={4}>

                    </Grid>


                    {/* Inventory Movement */}
                    <Grid size={4}>

                    </Grid>

                    <Grid size={8}>

                    </Grid>


                    {/* Purchase and Sales Summary */}
                    <Grid size={8}>

                    </Grid>

                    <Grid size={4}>

                    </Grid>

                </Grid>

            </section>
        </div>
    );
};

export default Inventory;
