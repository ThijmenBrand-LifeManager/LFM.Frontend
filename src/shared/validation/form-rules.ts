import { ValidationRuleWithParams } from "@vuelidate/core";
import { helpers } from "@vuelidate/validators";

export default function dateOnOrAfter(
  base: Date
): ValidationRuleWithParams<{ base: Date }> {
  return {
    $validator: (value: string) =>
      !helpers.req(value) || new Date(value).getDate() >= base.getDate(),
    $message: ({ $params }) =>
      `Date must on or after ${$params.base.toLocaleDateString()}`,
    $params: { base },
  };
}
