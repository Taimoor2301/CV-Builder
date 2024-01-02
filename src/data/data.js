import { nanoid } from "nanoid";
import { images } from "../assets/CVimages/index";
const { cv1, cv2, cv3, cv4, cv5, cv6 } = images;
import Template1 from "../CV Templates/Template1/Template1";
import Template2 from "../CV Templates/Template2/Template2";
import Template3 from "../CV Templates/Template3/Template3";
import Template4 from "../CV Templates/Template4/Template4";
import Template5 from "../CV Templates/Template5/Template5";
import Template6 from "../CV Templates/Template6/Template6";

export const data = [
	{
		name: "cv1",
		image: cv1,
		template: Template1,
		id: nanoid(),
	},
	{
		name: "cv2",
		image: cv2,
		template: Template2,
		id: nanoid(),
	},
	{
		name: "cv3",
		image: cv3,
		template: Template3,
		id: nanoid(),
	},
	{
		name: "cv4",
		image: cv4,
		template: Template4,
		id: nanoid(),
	},
	{
		name: "cv5",
		template: Template5,
		image: cv5,
		id: nanoid(),
	},
	{
		name: "cv6",
		template: Template6,
		image: cv6,
		id: nanoid(),
	},
];
