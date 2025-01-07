import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import Card from ".";

export default function ProfileCard({ item }) {
  return (
    <Card className="col-span-full flex flex-col items-start gap-3 border-2 border-dashed border-secondary bg-white md:col-span-1">
      <img
        src={item.img}
        alt="gaply"
        className="mb-2 aspect-square self-center rounded-full border border-secondary object-cover"
        placeholder="blur"
        width={100}
      />
      <h5 className="text-xl font-bold">
        {item.name}
        <br />
        <span className="text-base">{item.role}</span>
      </h5>
      <div className="flex items-center gap-2">
        <Icon icon="majesticons:mail" width={20} />
        <span>{item.email}</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon icon="bxl:linkedin" width={20} />
        <a
          className="underline"
          href={"https://" + item.linkedin}
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </Card>
  );
}

ProfileCard.propTypes = {
  item: PropTypes.object,
};
