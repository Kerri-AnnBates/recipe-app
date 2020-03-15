import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

function addSteps() {
	return (
		<div className="container">
			<h2>Add Steps</h2>
			<section className="">
				<div className="">
					{/* search box to filter out ingredients */}
					<input
						type="text"
						name="step"
						id="ingredient-search"
					/>
				</div>
			</section>

			<section>
				<h2>Included Steps</h2>
				<div></div>
			</section>
			<Button>Save</Button>
		</div>
	)
}

export default addSteps;
